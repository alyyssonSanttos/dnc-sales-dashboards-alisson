import styled from "styled-components";

const RegistationArea = styled.div`
  background: #333;
`;
const RegistationImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`;

function Registation() {
  return (
    <>
      <RegistationArea>Registration</RegistationArea>
      <RegistationImage />
    </>
  );
}

export default Registation;
