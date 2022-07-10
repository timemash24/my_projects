// // import { ConnectedRouter } from 'connected-react-router';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Switch,
//   useLocation,
// } from 'react-router-dom';
// import Home from '../routes/Home';
// import Portfolio from '../routes/Portfolio';
// import AboutMe from '../routes/AboutMe';
// import './Transition.css';

// function Transition() {
//   const home = <Home />;
//   const portfolio = <Portfolio />;
//   const aboutMe = <AboutMe />;

//   const location = useLocation();

//   return (
//     <Router>
//       <Route
//         render={({ location }) => (
//           <TransitionGroup>
//             <CSSTransition key={location.key} classNames="slide" timeout={500}>
//               <Switch location={location}>
//                 <Route exact path="/" children={home}></Route>

//                 {/* <Routes>
//                   <Route exact path="/" component={Home}></Route>
//                   <Route path="/portfolio" component={Portfolio}></Route>
//                   <Route path="/about_me" component={AboutMe}></Route>
//                 </Routes> */}
//               </Switch>
//             </CSSTransition>
//           </TransitionGroup>
//         )}
//       />
//     </Router>
//   );
// }

// export default Transition;
