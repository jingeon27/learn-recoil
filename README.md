# Recoil에 대하여

## RecoilRoot

RecoilRot안에서 recoil 상태를 나타낸다.

## Atom

Atom은 상태의 일부를 나타낸다. Atom은 어떤 컴포넌트에서나 쓸 수 있고 atom의 값을 얻는 컴포넌트들은 atom에 변화가 있으면 atom에 관련된 모든 컴포넌트들ㅇ 재 렌더링 됨.
컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 useState()마냥 쓰면 됨.

## Selector

Selector는 대충 atom에서 파생된 상태의 일부를 수정할 수 있다. useRecoilValue()로 값을 읽는다.
