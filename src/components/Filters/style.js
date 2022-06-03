import styled from "styled-components";
import SelectMUI from "@material-ui/core/Select";
import FormControlMUI from "@material-ui/core/FormControl";

//combine material ui with styled components
export const Select = styled(SelectMUI)`
  width: 100%;
`;

export const FormControl = styled(FormControlMUI)`
  max-width: 45%;
  min-width: 150px;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin-inline-end: 8px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 15px;
  width: 500px;
`;
