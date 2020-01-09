/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

// eslint-disable-next-line react/prefer-stateless-function
class MainTemplate extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (currentPage !== prevState.pageType) {
      this.setState({ pageType: currentPage });
      console.log(this.state);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {/* {console.log(pageTypes)} */}
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);

// *** Functional component
// function MainTemplate({ children, ...props }) {
//   return (
//     <div>
//       {console.log(props)}
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <>{children}</>
//       </ThemeProvider>
//     </div>
//   );
// }
