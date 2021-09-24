import React, { useEffect, useState } from 'react';
import './favoritesCompanies.scss';
import FavoritesManager from '../../Services/RailsApi/FavoritesFetch';
import CompanyPreview from '../CompaniesResults/CompanyPreview';
import CustomTypography from '../CustomTypography';

const FavoritesCompanies = () => {
  
  const [companies, setCompanies] = useState("")

  useEffect(() => {
    getFavoriteCompanies()
  }, []);

  const getFavoriteCompanies = async() => {
    const response = await FavoritesManager.getCompaniesByUser()
    setCompanies(response.data)
  }
  return (
    <div className="container__dashboard--favorites">
      <CustomTypography
        content="Mes Favoris"
        variant="h5"
        color="primary"
        sx={{ py: 2.5 }}
      />
      <ul className="dashboard--favorites">
        {companies && companies.map((company) => (
          <li key={company.id} className="item">
            <CompanyPreview company={company.data}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesCompanies;
