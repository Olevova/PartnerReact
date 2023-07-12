import styled from "styled-components";

const ShopsInf = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  .shopsInfo_block {
    /* position: absolute; */
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: ${(props) => props.theme.colors.headerBg};
    z-index: 8;
  }

  .shopsInfo_text {
    color: ${(props) => props.theme.colors.logo};
  }

  .shopsInfo_info {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }
  .shop_item {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;

    .item {
      padding: 5px;
      display: flex;
      justify-content: left;
      align-items: center;
      color: ${(props) => props.theme.colors.logo};
    }
    .icon {
      position: relative;
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
      /* background-color: ${(props) => props.theme.colors.logo}; */
      align-items: center;
      .one {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: ${(props) => props.theme.colors.logo};
      }
      .two {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
    }
    .item:hover {
      cursor: pointer;
      scale: 1.02;
    }

    .item:hover .icon {
      background-color: ${(props) => props.theme.colors.logo};
    }
    .item:hover .two {
      opacity: 1;
      fill: white;
    }
    .item:hover .one {
      opacity: 0;
    }
  }
  .item_style {
    font-weight: 600;
  }
  .shopsInfo_about {
    color: ${(props) => props.theme.colors.logo};
    padding: 5px;
    font-weight: 400;
  }
  .shopinfo_map {
    margin-top: auto;
  }
`;

export default ShopsInf;
