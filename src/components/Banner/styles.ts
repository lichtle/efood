import styled from "styled-components";

import { breakpoints } from "../../styles";

type Props = {
  image: string;
};

export const Container = styled.div<Props>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 280px;

  .container {
    position: relative;

    h3,
    span {
      position: absolute;
      left: 0;
      color: #fff;
      font-size: 32px;
    }

    h3 {
      font-weight: 900;
      top: 214px;
    }

    span {
      font-weight: 100;
      top: 25px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .container {
      h3,
      span {
        left: 16px;
      }

      h3 {
        font-size: 32px;
      }
    }
  }
`;
