import { useInfiniteScroll } from "@reactuses/core";
import { useRef, useState } from "react";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useInfiniteScroll(
    ref,
    () => {
      const length = data.length + 1;
      const newData = data.slice();
      if (newData.length === 400) {
        return;
      }
      newData.push(...Array.from({ length: 5 }, (_, i) => length + i));
      setData(newData);
    },
    { distance: 10 },
  );

  return (
    <div>
      <div ref={ref} style={{ width: 300, height: 300, overflow: "scroll" }}>
        {data.map(item => (
          <div key={item} style={{ padding: 12, border: "1px solid" }}>
            item-{item}
          </div>
        ))}
      </div>
    </div>
  );
};
