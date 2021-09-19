import React, {useState, useEffect, useContext} from 'react';
import './resultsCompanies.scss';
import HeaderResultsCompanies from '../ResultsCompanies/HeaderResultsCompanies';
import PreviewCompany from '../PreviewCompany';
import ProgressBar from '../Loaders/ProgressBar';
import ProgressCircle from '../Loaders/ProgressCircle';
import { CompaniesList} from '../../Services/RailsApi/CompaniesFetch/CompaniesDetailsManager'
import { FilterContext } from '../../Context/FilterContext';

const ResultsCompanies = () => {
  //TODO: use Context here pour l'url
  const {url} = useContext(FilterContext)

  const {data} = CompaniesList(url);
  const [company, setCompany] = useState([])

  useEffect(() => {
    setCompany(data)
  }, [data]);

  return (
    <div className="results__main--grid">
      {/*   <HeaderResultsCompanies />
    <ProgressBar />
      <ProgressCircle /> */}
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
