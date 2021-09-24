import React, { useState, useEffect, useContext } from "react";
import "./companies_results.scss";
import { FilterContext } from "../../Context/FilterContext";
import CompanyPreview from "./CompanyPreview";
import ProgressCircle from "../Loaders/ProgressCircle";
import CompanyInfoManager from "../../Services/RailsApi/CompaniesFetch/CompanyInfoManager";
import UIButton from "../UIButton";
import CustomTypography from "../CustomTypography";
import { useSelector } from "react-redux";

const ResultsCompanies = () => {
  const { url } = useContext(FilterContext);
  const{saveSearch} = useContext(FilterContext);

  const [companiesList, setCompaniesList] = useState(false);
  const [shortListIndex, setShortListIndex] = useState(0);
  const isLogged = useSelector((state) => state.user.isLogged);

  const getShortList = async (shorListIndex, idsList, itemList) => {
    const response = await CompanyInfoManager.getAllCompanies(
      url,
      shorListIndex
    );
    if (response.data) {
      let data = response.data;

      data.map((companyData) => {
        idsList.add(companyData.id);
        itemList.push(companyData);
        return("")
      });
    }
    idsList = Array.from(idsList);
    let array_list = [];
    idsList.map((id) =>
      array_list.push(itemList.find((element) => element.id === id))
    );
    setCompaniesList(array_list);
  };
  const getNextList = (ListIndex) => {
    let idsList = new Set();
    let itemList = [];
    companiesList.map((company) => {
      idsList.add(company.id);
      itemList.push(company);
      return("")
    });
    ListIndex = ListIndex + 1;
    getShortList(ListIndex, idsList, itemList);
    setShortListIndex(ListIndex);
  };

  useEffect(() => {
    let list = new Set();
    let itemList = [];
    setShortListIndex(0);
    setCompaniesList(false);
    getShortList(0, list, itemList);
  }, [url]);

  return (
    <>
      {companiesList ? (
        <div className="results__main--grid">
          {/* <HeaderCompaniesResults company={companiesList}/> */}
          {companiesList.length > 0 ? (
            <>
              <div className="results--all">
                <ul className="all--items">
                  {companiesList &&
                    companiesList.map((company) => (
                      <li key={company.id} className="item">
                        <CompanyPreview company={company} />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="container__center--btn">
                <div className="center--btn">
                  <UIButton
                    content="Plus de résultats"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      getNextList(shortListIndex);
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="results--all">
              {isLogged ? (
                <>
                  <CustomTypography
                    color="text.secondary"
                    content="Tu peux sauvegarder ta recherche et repasser plus tard si tu le souhaites."
                  />
                  <UIButton
                    sx={{ mt: 2.5 }}
                    color="primary"
                    variant="contained"
                    size="small"
                    content="enregistrer ma recherche"
                    onClick={saveSearch}
                  />
                </>
              ) : (
                <CustomTypography
                  color="text.secondary"
                  content="Aucune entreprise enregistrée chez nous ne correspond à tes résultats."
                />
              )}
              <CustomTypography
                sx={{ mt: 3 }}
                color="primary"
                variant="overline"
                component="div"
                content="À Bientôt!"
              />
            </div>
          )}
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
