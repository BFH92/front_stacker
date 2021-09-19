import React, { useEffect, useState } from "react";

import UserInfoManager from "../../../Services/RailsApi/UsersFetch/UserInfoManager";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import ChipsArray from "../../FilterSystem/ChipsArray";
import './edit_user_form.scss';
import { v4 as uuidv4 } from "uuid";
import { UserStacksContext } from "../../../Context/UserStacksContext";

export const EditUserForm = () => {
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
        getUserStacks(detail.data.user_stacks)
    }
    
    const getUserStacks = (list) => {
        let stacksList = new Set()
        list.map((userStack)=>{
        stacksList.add(userStack.name)
    })
        stacksList = Array.from(stacksList);
        addExistingStacks(stacksList)
    }
    
    useEffect (() => {

        getUserDetail()
        
    }, []);

    const [chipData, setChipData] = useState([]);
    
  const addExistingStacks =(list)=> {

    let StackList =[] 
    list.map((stack)=>{
    StackList.push({ key: uuidv4(), label: stack})
    
    })
    setChipData(StackList)
  }
 
 

    const history = useHistory();

    const updateUserDetails = async (e) => {
        e.preventDefault();
        const response = await UserInfoManager.updateDetails(userId, first_name, last_name, description, github_link);
        Promise.resolve(response)
        history.push(`/user/dashboard`)
    };

    const addUserStackAuthorization = true
      
    return (
        <UserStacksContext.Provider value={{chipData , setChipData, addUserStackAuthorization}}>
        <div>
            <h3>Modifier ma présentation</h3>
            <div className="form__container--company">
                <form>
                    <label>
                        Prénom
                        <input
                        type="text"
                        value={first_name != null ? first_name : ""}
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
                <div>
                    <ChipsArray value={{ stacks, setStacks, chipData, setChipData}}/>
                </div>
                
                
            </div>
        </div>
        </UserStacksContext.Provider>
    );

};