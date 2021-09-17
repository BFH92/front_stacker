import { useEffect, useState } from "react";

export const StacksFetch = (URL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getStacks = async () => {
      try {
        const res = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": " application/json",
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
    getStacks();
  }, [URL]);
  return { data };
};
