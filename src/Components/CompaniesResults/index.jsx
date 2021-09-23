import React, {useState, useEffect, useContext} from 'react';
import './companies_results.scss';
import HeaderCompaniesResults from './HeaderResultsCompanies';
import CompanyPreview from './CompanyPreview';
import ProgressCircle from '../Loaders/ProgressCircle';
import { CompaniesList} from '../../Services/RailsApi/CompaniesFetch/CompaniesDetailsManager';
import { FilterContext } from '../../Context/FilterContext';
import CompanyInfoManager from '../../Services/RailsApi/CompaniesFetch/CompanyInfoManager';
import { List } from '@material-ui/core';

const ResultsCompanies = () => {
  const {url} = useContext(FilterContext);

  const [companiesList, setCompaniesList] = useState([])
  const[shortListIndex, setShortListIndex] = useState(0)

  const getShortList = async(shorListIndex,idsList, itemList) => {  
    const response = await CompanyInfoManager.getAllCompanies(url, shorListIndex)
    if (response.data){
      let data = response.data

      data.map((companyData)=>{
        idsList.add(companyData.id)
        itemList.push(companyData)
      }
      )
    }
    idsList = Array.from(idsList)
    let array_list = []
    idsList.map((id)=>
    array_list.push(itemList.find(element => element.id == id))
    )
    setCompaniesList(array_list) 
  
  }
  const getNextList = (ListIndex) => {
    let idsList = new Set()
    let itemList = []
    companiesList.map((company)=>{
      idsList.add(company.id)
      itemList.push(company)
    }
    )
    ListIndex = ListIndex+1
    getShortList(ListIndex,idsList,itemList)
    setShortListIndex(ListIndex)
  
    
  }

  useEffect(()=>{
    let list = new Set()
    let itemList = []
    setShortListIndex(0)
    console.log(list )
    setCompaniesList([])
    getShortList(0, list, itemList)
    
  }, [url]);



  return (
    <>
      {companiesList ? (
        <div className="results__main--grid">        
          <HeaderCompaniesResults company={companiesList}/>
          <div className="results--all">
            <ul className="all--items">
              {companiesList && companiesList.map((company) => (
                <li key={company.id} className="item">
                  <CompanyPreview company={company}/>
                </li>
              ))}
            </ul>
                
          </div>
          <button onClick={()=>{getNextList(shortListIndex)}}> Next</button>
        </div>
      ) : (
        <div className="container__progress--circle">
          <ProgressCircle />
        </div>
      )}
    </>
  );
};

export default ResultsCompanies;
