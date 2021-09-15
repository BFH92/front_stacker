import React, {useState, useEffect} from 'react';
import './resultsCompanies.scss';
import HeaderResultsCompanies from '../HeaderResultsCompanies';
import PreviewCompany from '../PreviewCompany';
import ProgressBar from '../Loaders/ProgressBar';
import ProgressCircle from '../Loaders/ProgressCircle';
import { CompaniesList } from '../../Services/RailsApi/CompaniesFetch/CompaniesDetails'

const ResultsCompanies = () => {
  const {data} = CompaniesList('http://localhost:3000/companies');
  const [company, setCompany] = useState([])

  useEffect(() => {
    setCompany(data)
  }, [data]);

  return (
    <div className="results__main--grid">
      <HeaderResultsCompanies />
      <ProgressBar />
      <ProgressCircle />
      <div className="results--all">
        <div className="all--items">
          <ul>
            {company && company.map((company)=> (
              <li key={company.id}>
                <PreviewCompany company={company}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsCompanies;
