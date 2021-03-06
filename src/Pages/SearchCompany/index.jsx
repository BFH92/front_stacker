import React, { useState, useEffect } from "react";
import "./searchCompany.scss";
import { API_URL } from "../../Config/API_URL";
import { FilterContext } from "../../Context/FilterContext";
//Components
import CompaniesResults from "../../Components/CompaniesResults";
import FilterSystem from "../../Components/FilterSystem";
// API Managers
import SavedSearch from "../../Components/SavedSearch";
import SavedSearchesManager from "../../Services/RailsApi/SavedSearchesFetch";
//Alerts
import { useSnackbar } from "notistack";

const SearchCompany = () => {
  const [chipData, setChipData] = useState([]);
  const [url, setUrl] = useState(API_URL + "companies?");
  const [staffSize, setStaffSize] = useState("");
  const [categories, setCategories] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [filterStacks, setFilterStacks] = useState("");
  const [saveListener, setSaveListener] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const saveSearch = async () => {
    const existingSearchesQuota =
      await SavedSearchesManager.getSavedSearchesOfCurrentUser();
    if (existingSearchesQuota && existingSearchesQuota.data.length < 5) {
      try {
        const response = await SavedSearchesManager.saveSearch(
          filterStacks,
          staffSize,
          categories,
          categoryName
        );
        let variant = "success";
        let message = `Recherche sauvegardée!`;
        setSaveListener(saveListener + 1);
        enqueueSnackbar(message, { variant });
        return response
      } catch (error) {
        let variant = "warning";
        let message = `Recherche déja sauvegardée -> ${error}`;
        if (String(error).includes("401"))
          message = `Vous devez vous connecter pour sauvegarder votre recherche.`;
        enqueueSnackbar(message, { variant });
      }
    } else {
      let variant = "warning";
      let message = `Tu peux sauvegarder que 5 recherches max ! `;
      enqueueSnackbar(message, { variant });
    }
  };
  useEffect(() => {
    let urlParameters = ["/companies?"];
    if (staffSize) urlParameters.push(`staff_size=${staffSize}`);
    if (filterStacks) urlParameters.push(`stack=${filterStacks}`);
    if (categories) urlParameters.push(`categories=${categories}`);
    urlParameters = urlParameters.join("&");
    setUrl(urlParameters);
  }, [filterStacks, staffSize, categories]);

  return (
    <FilterContext.Provider
      value={{
        url,
        setUrl,
        chipData,
        setChipData,
        staffSize,
        setStaffSize,
        categories,
        setCategories,
        filterStacks,
        setFilterStacks,
        saveListener,
        setSaveListener,
        categoryName,
        setCategoryName,
        saveSearch,
      }}
    >
      <div className="container__search--companies">
        <FilterSystem />
        <div className="container--right">
          <div className="container__results--all">
            <SavedSearch />
            <CompaniesResults />
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default SearchCompany;
