import { useEffect, useState } from "react";

// data
import { legalData } from "../../data/legalData";

const Legal = () => {
  const [tabActive, setTabActive] = useState(0);
  const [data, setData] = useState(legalData[tabActive]);

  useEffect(() => {
    setData(legalData[tabActive]);
  }, [tabActive, data]);

  const { header, version, date, items } = data;

  return (
    <div className="py-10 container">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-6">
          {legalData.map(({ id, header }) => (
            <p
              key={id}
              onClick={() => setTabActive(id)}
              className={`cursor-pointer ${
                id === tabActive && "font-semibold"
              }`}
            >
              {header}
            </p>
          ))}
        </div>

        <div className="col-span-9">
          <h1>{header}</h1>
          <p className="flex items-center gap-3">
            <span>{version}</span>
            <span className="h-[1px] w-6 bg-black"></span>
            <span>{date}</span>
          </p>

          <div className="mt-16 space-y-6">
            {items.map(({ id, title, summary, description }) => {
              return (
                <div key={id}>
                  <h5 className="font-semibold text-2xl text-primary mb-6">
                    {title}
                  </h5>
                  <p className="text-primary mb-6">{summary}</p>
                  <div className="space-y-6">
                    {description.map(({ id, title, info }) => (
                      <p key={id} className="text-primary whitespace-pre-line">
                        {title && (
                          <span className="font-semibold mr-2">{title}</span>
                        )}
                        {info}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
