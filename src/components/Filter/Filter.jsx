import {FilterLabel, FilterInput, FilterDiv} from './Filter.styled'

export const Filter =  ({ value, onChange }) => {
  return (
    <FilterDiv>
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></FilterInput>
      </FilterLabel>
      </FilterDiv>
  );
};



