import React, { useEffect, useState } from "react";
import UsersAPIManager from '../../Services/RailsApi/UsersFetch';
import { useHistory } from "react-router";
import {useParams} from 'react-router-dom';

export const EditUserPresentation = () => {
    const { u } = useParams();

    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [description, setDescription] = useState("");
    const [github_link, setGithub_Link] = useState("");
    useEffect (() => {
        getUserDetail()
    });

    const getUserDetail = async() => {
        const {detail} = await UsersAPIManager.getDetails(u)
        setFirst_Name(detail.first_name)
        setLast_Name(detail.last_name)
        setDescription(detail.description)
        setGithub_Link(detail)
    }

    const history = useHistory();

    const UpdateDetail = async (e) => {
        e.preventDefault();
        const reponse = await UsersAPIManager.updateUserDetails(first_name, last_name, description, github_link);
        Promise.resolve(response)
        history.push(`/user/dashboard`)
    };

    return (
        <div>
            <h2>Modifier ma présentation</h2>
            <div>
                <form>
                    <label>
                        Prénom
                        <input
                        type="text"
                        value={first_name}
                        onChange={(e)=>setFirst_Name(e.target.value)}
                        />
                    </label>
                    <label>
                        Nom de famille
                        <input
                        type="text"
                        value={last_name}
                        onChange={(e)=>setLast_Name(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <input
                        type="text"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        GitHub Link
                        <input
                        type="text"
                        value={github_link}
                        onChange={(e)=>setGithub_Link(e.target.value)}
                        />
                    </label>
                    <button onClick={UpdateDetail}>sauvegarder</button>
                </form>
            </div>
        </div>
    );

};