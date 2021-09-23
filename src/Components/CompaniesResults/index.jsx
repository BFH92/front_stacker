import React, {useState, useEffect, useContext} from 'react';
import './companies_results.scss';
import HeaderCompaniesResults from './HeaderResultsCompanies';
import CompanyPreview from './CompanyPreview';
import ProgressCircle from '../Loaders/ProgressCircle';
import { CompaniesList} from '../../Services/RailsApi/CompaniesFetch/CompaniesDetailsManager';
import { FilterContext } from '../../Context/FilterContext';
import CompanyInfoManager from '../../Services/RailsApi/CompaniesFetch/CompanyInfoManager';
import { List } from '@material-ui/core';
import UIButton from '../UIButton';

const ResultsCompanies = () => {
  const {url} = useContext(FilterContext);

  const [companiesList, setCompaniesList] = useState([])
  const[shortListIndex, setShortListIndex] = useState(0)
  let list = new Set()
  const getShortList = async(shorListIndex) => {  
    const response = await CompanyInfoManager.getAllCompanies(url, shorListIndex)
    if (response.data){
      let data = response.data
      
      data.map((companyData)=>
        list.add(companyData)
      )
    }
    let array_list = Array.from(list)
    console.log(response)
    console.log(array_list)
    setCompaniesList(array_list)
    

  }
  const getNextList = (ListIndex) => {
    companiesList.map((company)=>
      list.add(company)
    )
    console.log(ListIndex)
  
    getShortList(ListIndex+1)
    setShortListIndex(ListIndex+1)
  
    
  }

  useEffect(()=>{
    list = new Set()
    setShortListIndex(0)
    console.log("hey")
    setCompaniesList([])
    getShortList(0)
    
  }, [url]);



  return (
    <>
      {companiesList ? (
        <div className="results__main--grid">        
          {/* <HeaderCompaniesResults company={companiesList}/> */}
          <div className="results--all">
            <ul className="all--items">
              {companiesList && companiesList.map((company) => (
                <li key={company.id} className="item">
                  <CompanyPreview company={company}/>
                </li>
              ))}
            </ul>
                
          </div>
          <div className="center--btn">
            <UIButton
              content="Plus de résultats"
              color="primary"
              variant="contained"
              onClick={()=>{getNextList(shortListIndex)}}
            />
          </div>
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
