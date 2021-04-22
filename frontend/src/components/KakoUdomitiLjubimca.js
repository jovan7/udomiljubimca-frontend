import styled from "styled-components"


const DivFlex = styled.div`
  width: 1100px;
  margin: auto;
  display: flex;
  position: relative;
  margin-bottom:100px;
`

const Box1 = styled.div`
  margin-right: -115px;
  margin-left:50px;
`

const Box2 = styled.div`
  margin-right: -115px;
`

const DodatnaKocka = styled.div`
      display: inline-block;
      width: 100px;
      height: 212px;
      background-color: #169DA8;
      margin-right: -4px;

`

const Kocka = styled.div`

      display: inline-block;
      width: 200px;
      height: 212px;
      background-color: #169DA8;
`

const Trougao = styled.div`
      display: inline-block;
      border-top: 112px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid transparent;
      border-left: 70px solid #169DA8;

      margin-left: -5px;

`

const Trougao1 = styled.div`
      display: inline-block;
      border-top: 112px solid #169DA8;
      border-right: 50px solid #169DA8;
      border-bottom: 100px solid #169DA8;
      border-left: 70px solid transparent;

      margin-right: -4px;

`

const Text1 = styled.p`
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      color: #FFFFFF;
      width: 164px;
      height: 78px;
      position: absolute;
      left: 150px;
      top: 60px;
`

const Text2 = styled.p`
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      color: #FFFFFF;
      width: 164px;
      height: 78px;
      position: absolute;
      left: 450px;
      top: 60px;
`

const Text3 = styled.p`
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      color: #FFFFFF;
      width: 164px;
      height: 78px;
      position: absolute;
      left: 760px;
      top: 60px;
`


function KakoUdomitiLjubimca() {
  return (
    <DivFlex>

      <Box1>
        <DodatnaKocka />
        <Kocka />
        <Trougao />
      </Box1>

      <Box2>
        <Trougao1 />
        <Kocka />
        <Trougao />
      </Box2>
      <div>
        <Trougao1 />
        <Kocka />
        <Trougao />
      </div>

      <Text1>
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
     </Text1>

      <Text2>
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
    </Text2>

      <Text3>
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
    </Text3>


    </DivFlex>
  )
}

export default KakoUdomitiLjubimca
