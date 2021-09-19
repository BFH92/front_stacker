import React, {useState, useEffect, useContext} from 'react';
import './companies_results.scss';
import HeaderCompaniesResults from './HeaderResultsCompanies';
import CompanyPreview from '../CompanyPreview';
import ProgressBar from '../Loaders/ProgressBar';
import ProgressCircle from '../Loaders/ProgressCircle';
import { CompaniesList} from '../../Services/RailsApi/CompaniesFetch/CompaniesDetailsManager'
import { FilterContext } from '../../Context/FilterContext';

const ResultsCompanies = () => {
  const {url} = useContext(FilterContext)

  const {data} = CompaniesList(url);
  const [company, setCompany] = useState([])

  useEffect(() => {
    setCompany(data)
  }, [data]);

  return (
    <div className="results__main--grid">
         <HeaderCompaniesResults />
    {/*<ProgressBar />
      <ProgressCircle /> */}
      <div className="results--all">
        <div className="all--items">
          <ul>
            {company && company.map((company)=> (
              <li key={company.id}>
                <CompanyPreview company={company}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsCompanies;
