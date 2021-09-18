import React, { useCallback, useEffect, useState } from "react";
import UserInfoManager from '../../Services/RailsApi/UserInfoManager';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import { API_URL } from "../../Config/API_URL";
import ChipsArray from "../FilterSystem/ChipsArray";
import UserStackManager from "../../Services/RailsApi/UserStackManager ";
import '../Forms/CompanyForm/company_form.scss';


export const EditUserPresentation = () => {
    const userId = useSelector(state => state.user.id);
    console.log(userId)
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [description, setDescription] = useState("");
    const [github_link, setGithub_Link] = useState("");
    const [userStacks, setUserStacks] = useState([]);
    const [stacks, setStacks] = useState([])

      
    const getUserDetail = async() => {
        const detail = await UserInfoManager.getDetails(userId)
        console.log(detail)
        setFirst_Name(detail.data.first_name)
        setLast_Name(detail.data.last_name)
        setDescription(detail.data.description)
        setGithub_Link(detail.data.github_link)
        setUserStacks(detail.data.stacks)
        //console.log(detail.data.stacks)
    }
    let stackNames = new Set()
    const getStackNames = () => {
        
        userStacks.map((stack)=>
        stackNames.add(stack.name)
        )
        
        stackNames= Array.from(stackNames)
        
        console.log(stackNames)
    }
    
    useEffect (() => {

        getUserDetail()
    
    }, []);
    
    //useEffect (() => {
//
    //    getStackNames()
    //    
    //}, [getUserDetail]); 
    const history = useHistory();

    const updateUserDetails = async (e) => {
        e.preventDefault();
        const response = await UserInfoManager.updateDetails(userId, first_name, last_name, description, github_link);
        Promise.resolve(response)
        history.push(`/user/dashboard`)
    };

    
    

    const mapUserStacksAndAdd = (stacks) => {
        stacks.map((stack)=>{
            const  addUserStack = async(stack) => {
                const response = await UserStackManager.addUserStack(stack)
            }
                addUserStack(stack)
            }
        
        )
        
    }
    
    useEffect(() => {
        getStackNames()
        
        //TODO: map d'une array avec les stacks à ajouter
        // si la stack existe déjà => on ne fait rien
        // si la stack n'existe pas => on addUserstack
        console.log(stacks)
        //stacks? stacks.map((stack)=>
        //stackNames.add(stack)
        //):null;
        let newStack = []
        if (stacks.length !== 0)(newStack = stacks.split(","))
        newStack.map((stack)=>
        stackNames.push(stack)
        )
        
        console.log(userStacks)
        console.log("HEY")
        console.log(newStack)
        console.log(stackNames)
        mapUserStacksAndAdd(stackNames)
        
        //setChipData([{uuid:23, label:"hey"}]) 
        //TODO: mettre à jour le chip sous ce format
      }, [stackNames]);

      
    return (
        <div>
            <h3>Modifier ma présentation</h3>
            <div className="form__container--company">
                <form>
                    <label>
                        Prénom
                        <input
                        type="text"
                        value={first_name? first_name : ""}
                        onChange={(e)=>setFirst_Name(e.target.value)}
                        />
                    </label>
                    <label>
                        Nom
                        <input
                        type="text"
                        value={last_name? last_name : ""}
                        onChange={(e)=>setLast_Name(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <input
                        type="text"
                        value={description? description : ""}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        Lien GitHub
                        <input
                        type="text"
                        value={github_link? github_link : ""}
                        onChange={(e)=>setGithub_Link(e.target.value)}
                        />
                    </label>
                    <button onClick={updateUserDetails}>sauvegarder</button>
                </form>
                <div style={{backgroundColor: "blue"}}>
                    <ChipsArray value={{ setStacks}}/>
                    
                </div>
                
            </div>
        </div>
    );

};