import { useState } from "react";
import { AtoZData } from "./AtoZData";
import { Select } from "antd";
import AtoZType from "../../components/aToZType/AtoZType";

const AtoZ = () => {
  const [aToZName, setaToZName] = useState("a");

  const handleSearch = (inputValue, option) =>
    (option.label ?? "").toLowerCase().includes(inputValue.toLowerCase());

  return (
    <div className="category-wrapper">
      <div className="category-inner-wrapper ingredient-inner-wrapper">
        <h1 className="ingredient-title">Search A to Z</h1>
        <div className="ingredient-row-column">
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Select ingredients"
            optionFilterProp="children"
            filterOption={handleSearch}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            onChange={(value) => setaToZName(value)}
            onSearch={(inputValue) => setaToZName(inputValue)}
            options={AtoZData.map((type) => ({
              value: type.name,
              label: type.name,
            }))}
          />
        </div>
        <AtoZType typeName={aToZName} />
      </div>
    </div>
  );
};

export default AtoZ;
