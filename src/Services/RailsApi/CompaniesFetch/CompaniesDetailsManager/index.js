import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const CompaniesList = (URL) => {
  const [data, setData] = useState(null);
  //const token = Cookies.get('token')

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": " application/json",
            //Authorization: `Bearer ${token}`
          },
        });

        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanies();
  }, [URL]);
  return { data };
};
