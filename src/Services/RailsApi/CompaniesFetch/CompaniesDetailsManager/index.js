import { useEffect, useState } from "react";

export const CompaniesList = (URL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": " application/json",
          },
        });
        if (res.status === 200) {
          const data = await res.json();
          setData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanies();
  }, [URL]);
  return { data };
};
