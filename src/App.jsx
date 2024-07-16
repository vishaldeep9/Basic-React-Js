import React from 'react'
import Greet from './Component/Greet'
import ForState from './Component/ForState'
import Count from './Component/Count'
import FunctionClick from './Component/FunctionClick'
import ParentComponent from './Component/ParentComponent'
import UserGreetings from './Component/UserGreetings'
import ParentArray from './Component/ParentArray'
import StyleSheet from './Component/StyleSheet'
import Form from './Component/Form'
import TableFragment from './Component/TableFragment'
import ParentMemoComponent from './Component/ParentMemoComponent'
import RefDemo from './Component/RefDemo'
import FocusInput from './Component/FocusInput'
import PortalDemo from './Component/PortalDemo'
import ErrorBoundary from './Component/ErrorBoundary'
import Hero from './Component/Hero'
import ErrorBoundaryClass from './Component/ErrorBoundaryClass'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import ClickCounterTwo from './Component/ClickCounterTwo'
import HoverCounterTwo from './Component/HoverCounterTwo'
import Counter from './Component/Counter'
import ComponentC from './Component/ComponentC'
import { UserProvider } from './Component/UserContext'
const App = () => {
  return (
    <div>  
    <UserProvider value="Vishal">
      <ComponentC/>
    </UserProvider>
    
      {/* <Counter>{
        (count,increment)=>{
          return (
          <ClickCounterTwo count={count} increment={increment}/>)
        }}
        </Counter>
        <Counter>{
        (count,increment)=>{
          return <HoverCounterTwo count={count} increment={increment}/>
        }}
        </Counter> */}
      
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
{/* <ClickCounter name="vishal"/>
<HoverCounter/> */}
   {/* <ErrorBoundary><Hero heroName="batman"/></ErrorBoundary>
   <ErrorBoundary><Hero heroName="spider"/></ErrorBoundary>
   <ErrorBoundary><Hero heroName="joker"/></ErrorBoundary> */}
  {/* <ErrorBoundaryClass><Hero heroName="batman"/></ErrorBoundaryClass>
  <ErrorBoundaryClass><Hero heroName="spiderman"/></ErrorBoundaryClass>
  <ErrorBoundaryClass><Hero heroName="joker"/></ErrorBoundaryClass> */}
   {/* <ErrorBoundary><Count/></ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FocusInput/> */}
      {/* <RefDemo/> */}
      {/* <ParentMemoComponent/> */}
      {/* <TableFragment/> */}
      {/* <Form/> */}
     {/* <StyleSheet primary={true}/> */}
      {/* <ParentArray/> */}
      {/* <UserGreetings/> */}
      {/* <ParentComponent/> */}
    {/* <FunctionClick /> */}
     {/* <Count/> */}
      {/* <ForState/> */}
     {/* <Greet name="Akshay" favHero="Ajay Devgan">
       this is the childern of Greet Akshay
     </Greet>
     <Greet name="Shakti" favHero="Sunil Shetty">
      <button>Action for Greet Shakti</button>
     </Greet> */}
    </div>
  )
}

export default App
