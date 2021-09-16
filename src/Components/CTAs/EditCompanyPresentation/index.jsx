import React, { useEffect, useState } from "react";
import CompanyInfoManager from '../../Services/RailsApi/UserInfoManager';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

export const EditCompanyPresentation = () => {
    const companyId = useSelector(state => state.company.id);
    console.log(companyId)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [github_link, setGithub_Link] = useState("");
    const []
}