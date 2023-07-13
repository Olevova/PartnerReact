import styled from "styled-components";

const ShopsInf = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  .map {
    position: absolute;
    right: 110px;
    top: 50px;
    width: 200px;
  }
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
    font-family: "Lobster", cursive;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5px;
  }
  .shop_item {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(1, 1fr); */
    /* gap: 5px; */
    align-content: center;

    .item {
      padding: 5px;
      display: flex;
      justify-content: left;
      align-items: center;
      color: ${(props) => props.theme.colors.logo};
    }
    .item.active {
      color: red;
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
    .text {
      font-family: "Lobster", cursive;
    }
    .item:hover {
      transition: all 300ms ease-in 0s;
      cursor: pointer;
      scale: 1.01;
      color: red;
    }

    .item:hover .icon {
      transition: all 300ms ease-in 0s;
      background-color: red;
    }
    .item:hover .two {
      transition: all 300ms ease-in 0s;
      opacity: 1;
      fill: white;
    }
    .item:hover .one {
      transition: all 300ms ease-in 0s;
      opacity: 0;
    }
  }
  .item.active .icon {
    transition: all 300ms ease-in 0s;
    background-color: red;
  }
  .item.active .two {
    transition: all 300ms ease-in 0s;
    opacity: 1;
    fill: white;
  }
  .item.active .one {
    transition: all 300ms ease-in 0s;
    opacity: 0;
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
