import React, {useState, useEffect, useContext} from 'react';
import './companies_results.scss';
import HeaderCompaniesResults from './HeaderResultsCompanies';
import CompanyPreview from './CompanyPreview';
// import ProgressBar from '../Loaders/ProgressBar';
import ProgressCircle from '../Loaders/ProgressCircle';
import { CompaniesList} from '../../Services/RailsApi/CompaniesFetch/CompaniesDetailsManager';
import { FilterContext } from '../../Context/FilterContext';
import { FavoriteContext } from '../../Context/FavoriteContext';

const ResultsCompanies = () => {
  const {url} = useContext(FilterContext);
  const {data} = CompaniesList(url);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    setCompany(data);
  }, [data]);

  return (
    <>
  
      {company ? (
        <div className="results__main--grid">        
          <HeaderCompaniesResults company={company}/>
          <div className="results--all">
            <ul className="all--items">
              {company && company.map((company) => (
                <li key={company.id} className="item">
                  <CompanyPreview company={company}/>
                </li>
              ))}
            </ul>
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
