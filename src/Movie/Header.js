import React from "react";
// import "../Movie/style.css";
// import "../Movie/header.css";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <>
        <Helmet>
          <title>Movie</title>
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="header.css" />
          <body className="home blog wp-custom-logo dark-background dark-version main-layout-boxed disable-floating-video header-vid-default beeteam368" />
        </Helmet>
      <div
        id='site-wrap-parent'
        className='site-wrap-parent site-wrap-parent-control'
      >
        <div
          id='site-wrap-children'
          className='site-wrap-children site-wrap-children-control'
        >
          <header
            id='site-header'
            className='site-header header-default site-header-control'
          >
            <div className='top-nav top-nav-control dark-background'>
              <div className='site__container fullwidth-vidorev-ctrl container-control'>
                <div className='site__row auto-width'>
                  <div className='site__col float-left top-videos'>
                    <div className='top-video-content'>
                      <div className='top-video-wrap'></div>
                    </div>
                  </div>

                  <div className='site__col float-right top-social'>
                    <div className='top-social-content'>
                      <ul className='social-block s-grid nav-style'></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='top-content'>
              <div className='site__container fullwidth-vidorev-ctrl container-control'>
                <div className='site__row auto-width'>
                  <div className='site__col float-left nav-logo'>
                    <div className='nav-logo-img'>
                      <a
                        href='https://vegamovies.de/'
                        title='Vegamovies.NL'
                        className='logo-link'
                      >
                        <img
                          src='./img/logo.png'
                          alt='Vegamovies.NL'
                          className='main-logo'
                          width='auto'
                          height='auto'
                        />
                      </a>
                    </div>
                  </div>

                  <div className='site__col float-right top-ad'></div>
                </div>
              </div>
            </div>

            <div className='nav-wrap nav-wrap-control'>
              <div className='main-nav main-nav-control'>
                <div className='site__container fullwidth-vidorev-ctrl container-control'>
                  <div className='site__row auto-width'>
                    <div className='site__col float-left nav-logo'>
                      <div className='nav-logo-img'>
                        <a
                          href='https://vegamovies.de/'
                          title='Vegamovies.NL'
                          className='logo-link'
                        >
                          <img
                            src='https://vegamovies.de/wp-content/uploads/2022/09/logo.png'
                            alt='Vegamovies.NL'
                            className='main-logo'
                            width='auto'
                            height='auto'
                          />
                          <img
                            src='https://vegamovies.de/wp-content/uploads/2022/03/Logo.png'
                            alt='Vegamovies.NL'
                            className='main-logo-mobile'
                            width='auto'
                            height='auto'
                          />
                          <img
                            src='https://vegamovies.de/wp-content/uploads/2022/03/Logo.png'
                            alt='Vegamovies.NL'
                            className='sticky-logo'
                            width='auto'
                            height='auto'
                          />
                        </a>
                      </div>
                    </div>

                    <div className='site__col float-left nav-menu nav-menu-control navigation-font'>
                      <ul>
                        <li
                          id='menu-item-285'
                          className='menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-285'
                        >
                          <a href='/'>HOME</a>
                        </li>
                        <li
                          id='menu-item-3517'
                          className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3517'
                        >
                          <a href='#'>📹 Web Series </a>
                          <ul className='sub-menu'>
                            <li
                              id='menu-item-3519'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3519'
                            >
                              <a href='https://vegamovies.de/category/web-series/amazon-prime-video/'>
                                Amazon Prime Video
                              </a>
                            </li>
                            <li
                              id='menu-item-3521'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3521'
                            >
                              <a href='https://vegamovies.de/category/web-series/netflix/'>
                                Netflix
                              </a>
                            </li>
                            <li
                              id='menu-item-26798'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26798'
                            >
                              <a href='https://vegamovies.de/category/web-series/zee5-originals/'>
                                ZEE5 Originals
                              </a>
                            </li>
                            <li
                              id='menu-item-26794'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26794'
                            >
                              <a href='https://vegamovies.de/category/web-series/mx-original/'>
                                MX Original
                              </a>
                            </li>
                            <li
                              id='menu-item-3518'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3518'
                            >
                              <a href='https://vegamovies.de/category/web-series/alt-balaji-web-series/'>
                                ALT Balaji
                              </a>
                            </li>
                            <li
                              id='menu-item-26787'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26787'
                            >
                              <a href='https://vegamovies.de/category/web-series/apple-tv/'>
                                Apple TV+
                              </a>
                            </li>
                            <li
                              id='menu-item-26788'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26788'
                            >
                              <a href='https://vegamovies.de/category/web-series/disney-plus-hotstar/'>
                                Disney+ Hotstar
                              </a>
                            </li>
                            <li
                              id='menu-item-26797'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26797'
                            >
                              <a href='https://vegamovies.de/category/web-series/voot-originals/'>
                                Voot Originals
                              </a>
                            </li>
                            <li
                              id='menu-item-3523'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3523'
                            >
                              <a href='https://vegamovies.de/category/web-series/viu-originals/'>
                                Viu Originals
                              </a>
                            </li>
                            <li
                              id='menu-item-3522'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3522'
                            >
                              <a href='https://vegamovies.de/category/adult/18-adult-series/ullu-originals/'>
                                ULLU Originals
                              </a>
                            </li>
                            <li
                              id='menu-item-26796'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26796'
                            >
                              <a href='https://vegamovies.de/category/web-series/tvf-series/'>
                                TVF Series
                              </a>
                            </li>
                            <li
                              id='menu-item-26795'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26795'
                            >
                              <a href='https://vegamovies.de/category/web-series/sonyliv/'>
                                SonyLIV
                              </a>
                            </li>
                            <li
                              id='menu-item-123836'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-123836'
                            >
                              <a href='https://vegamovies.de/category/web-series/gemplex/'>
                                Gemplex
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id='menu-item-3553'
                          className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3553'
                        >
                          <a href='#'>☠️ Dual Audio </a>
                          <ul className='sub-menu'>
                            <li
                              id='menu-item-3554'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3554'
                            >
                              <a href='https://vegamovies.de/category/dual-audio-movies/'>
                                Movies
                              </a>
                            </li>
                            <li
                              id='menu-item-3555'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3555'
                            >
                              <a href='https://vegamovies.de/category/dual-audio-series/'>
                                Series
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id='menu-item-713'
                          className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-713'
                        >
                          <a href='#'>🌐 Genre </a>
                          <ul className='sub-menu'>
                            <li
                              id='menu-item-693'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-693'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/action/'>
                                Action
                              </a>
                            </li>
                            <li
                              id='menu-item-694'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-694'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/adventure/'>
                                Adventure
                              </a>
                            </li>
                            <li
                              id='menu-item-11374'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11374'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/animation/'>
                                Animation
                              </a>
                            </li>
                            <li
                              id='menu-item-695'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-695'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/biography/'>
                                Biography
                              </a>
                            </li>
                            <li
                              id='menu-item-696'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-696'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/comedy/'>
                                Comedy
                              </a>
                            </li>
                            <li
                              id='menu-item-697'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-697'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/crime/'>
                                Crime
                              </a>
                            </li>
                            <li
                              id='menu-item-111672'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111672'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/documentary/'>
                                Documentary
                              </a>
                            </li>
                            <li
                              id='menu-item-698'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-698'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/drama/'>
                                Drama
                              </a>
                            </li>
                            <li
                              id='menu-item-699'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-699'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/family/'>
                                Family
                              </a>
                            </li>
                            <li
                              id='menu-item-700'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-700'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/fantasy/'>
                                Fantasy
                              </a>
                            </li>
                            <li
                              id='menu-item-701'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-701'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/history/'>
                                History
                              </a>
                            </li>
                            <li
                              id='menu-item-702'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-702'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/horror/'>
                                Horror
                              </a>
                            </li>
                            <li
                              id='menu-item-111669'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111669'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/mystery/'>
                                Mystery
                              </a>
                            </li>
                            <li
                              id='menu-item-703'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-703'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/music/'>
                                Music
                              </a>
                            </li>
                            <li
                              id='menu-item-704'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-704'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/musical/'>
                                Musical
                              </a>
                            </li>
                            <li
                              id='menu-item-705'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-705'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/romance/'>
                                Romance
                              </a>
                            </li>
                            <li
                              id='menu-item-111673'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111673'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/sci-fi/'>
                                Sci-Fi
                              </a>
                            </li>
                            <li
                              id='menu-item-111674'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111674'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/sport/'>
                                Sport
                              </a>
                            </li>
                            <li
                              id='menu-item-111675'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111675'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/short/'>
                                Short
                              </a>
                            </li>
                            <li
                              id='menu-item-111676'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111676'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/suspense/'>
                                Suspense
                              </a>
                            </li>
                            <li
                              id='menu-item-706'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-706'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/thriller/'>
                                Thriller
                              </a>
                            </li>
                            <li
                              id='menu-item-707'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-707'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/war/'>
                                War
                              </a>
                            </li>
                            <li
                              id='menu-item-111670'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111670'
                            >
                              <a href='https://vegamovies.de/category/movies-by-genres/western/'>
                                Western
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id='menu-item-714'
                          className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-714'
                        >
                          <a href='https://vegamovies.de/category/movies-by-year/'>
                            By Year{" "}
                          </a>
                          <ul className='sub-menu'>
                            <li
                              id='menu-item-111033'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111033'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2022/'>
                                2022
                              </a>
                            </li>
                            <li
                              id='menu-item-111032'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111032'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2021/'>
                                2021
                              </a>
                            </li>
                            <li
                              id='menu-item-724'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-724'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2020/'>
                                2020
                              </a>
                            </li>
                            <li
                              id='menu-item-723'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-723'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2019/'>
                                2019
                              </a>
                            </li>
                            <li
                              id='menu-item-722'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-722'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2018/'>
                                2018
                              </a>
                            </li>
                            <li
                              id='menu-item-721'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-721'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2017/'>
                                2017
                              </a>
                            </li>
                            <li
                              id='menu-item-720'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-720'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2016/'>
                                2016
                              </a>
                            </li>
                            <li
                              id='menu-item-11373'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11373'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2015/'>
                                2015
                              </a>
                            </li>
                            <li
                              id='menu-item-719'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-719'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2014/'>
                                2014
                              </a>
                            </li>
                            <li
                              id='menu-item-718'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-718'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2013/'>
                                2013
                              </a>
                            </li>
                            <li
                              id='menu-item-717'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-717'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2012/'>
                                2012
                              </a>
                            </li>
                            <li
                              id='menu-item-11372'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11372'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2011/'>
                                2011
                              </a>
                            </li>
                            <li
                              id='menu-item-11371'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11371'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2010/'>
                                2010
                              </a>
                            </li>
                            <li
                              id='menu-item-11370'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11370'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2009/'>
                                2009
                              </a>
                            </li>
                            <li
                              id='menu-item-11369'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11369'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2008/'>
                                2008
                              </a>
                            </li>
                            <li
                              id='menu-item-11368'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11368'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2007/'>
                                2007
                              </a>
                            </li>
                            <li
                              id='menu-item-716'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-716'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2006/'>
                                2006
                              </a>
                            </li>
                            <li
                              id='menu-item-11367'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11367'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2005/'>
                                2005
                              </a>
                            </li>
                            <li
                              id='menu-item-11366'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11366'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2004/'>
                                2004
                              </a>
                            </li>
                            <li
                              id='menu-item-11365'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11365'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2003/'>
                                2003
                              </a>
                            </li>
                            <li
                              id='menu-item-11364'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11364'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2002/'>
                                2002
                              </a>
                            </li>
                            <li
                              id='menu-item-11363'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11363'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2001/'>
                                2001
                              </a>
                            </li>
                            <li
                              id='menu-item-11362'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11362'
                            >
                              <a href='https://vegamovies.de/category/movies-by-year/2000/'>
                                2000
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id='menu-item-111162'
                          className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-111162'
                        >
                          <a href='#'>By Qualities </a>
                          <ul className='sub-menu'>
                            <li
                              id='menu-item-111164'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111164'
                            >
                              <a href='https://vegamovies.de/category/movies-by-quality/480p/'>
                                480p
                              </a>
                            </li>
                            <li
                              id='menu-item-111163'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111163'
                            >
                              <a href='https://vegamovies.de/category/movies-by-quality/720p/'>
                                720p
                              </a>
                            </li>
                            <li
                              id='menu-item-111165'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111165'
                            >
                              <a href='https://vegamovies.de/category/movies-by-quality/1080p/'>
                                1080p
                              </a>
                            </li>
                            <li
                              id='menu-item-111166'
                              className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111166'
                            >
                              <a href='https://vegamovies.de/category/movies-by-quality/2160p/'>
                                2160p 4K
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className='site__col float-left nav-mobile-menu'>
                      <div className='button-wrap'>
                        <div className='button-menu-mobile button-menu-mobile-control'>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div className='site__col float-right top-search-box-mobile'>
                      <ul>
                        <li className='top-search-elm top-search-elm-control'>
                          <a
                            href='#'
                            title='Search'
                            className='top-search-dropdown top-search-dropdown-control'
                          >
                            <span className='icon'>
                              <i
                                className='fa fa-search'
                                aria-hidden='true'
                              ></i>
                            </span>
                          </a>
                          <ul className='dark-background'>
                            <li className='top-search-box-dropdown'>
                              <form
                                action='https://vegamovies.de/'
                                method='get'
                              >
                                <input
                                  className='search-terms-textfield search-terms-textfield-control'
                                  autoComplete='off'
                                  type='text'
                                  placeholder='Type and hit enter ...'
                                  name='s'
                                  // value=''
                                />
                                <input type='submit' value='Search' />
                              </form>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className='site__col float-right top-login-box-mobile'></div>

                    <div className='site__col float-right top-search-box'>
                      <div className='top-search-box-wrapper'>
                        <form action='https://vegamovies.de/' method='get'>
                          <input
                            className='search-terms-textfield search-terms-textfield-control'
                            autoComplete='off'
                            type='text'
                            placeholder='Search...'
                            name='s'
                            // value=''
                          />
                          <i className='fa fa-search' aria-hidden='true'></i>
                          <input type='submit' value='Search' />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div id='header-social'>
            <a href='https://dotmovies.lol' rel='noopener'>
              <span className='button bollywood'> Bollywood Content</span>
            </a>
            <a href='https://xprimehub.live/' target='_blank' rel='noopener'>
              <span className='button desijunx'>
                <div className='adultimg'>
                  <img src='/img/18.png' width='20px' />
                </div>
                Desi Junction
              </span>
            </a>
            <a href='https://vegamovies.de'>
              <span className='button buttontg'>
                <i className='fa fa-telegram'></i> Join Telegram
              </span>
            </a>
            <a href='/how-to-download/'>
              <span className='button howtodl'>
                How To Download <i className='fa fa-eye'></i>{" "}
              </span>
            </a>
          </div>

          <div id='header-category'>
            <a href='/category/movies-by-quality/480p/'>
              <span className='hcategory hccateg'> 480p </span>
            </a>
            <a href='/category/movies-by-quality/720p/'>
              <span className='hcategory hccateg'> 720p </span>
            </a>
            <a href='/category/movies-by-quality/1080p/'>
              <span className='hcategory hccateg'> 1080p </span>
            </a>
            <a href='/category/movies-by-quality/60fps/'>
              <span className='hcategory hccateg'>
                1080p <strong>[60FPS]</strong>
              </span>
            </a>
            <a href='/category/movies-by-quality/2160p/'>
              <span className='hcategory hccateg'>
                2160p <strong>4K</strong>
              </span>
            </a>
            <a href='/category/anime-series/'>
              <span className='hcategory hccateg'> Anime </span>
            </a>
            <a href='/category/english/'>
              <span className='hcategory hccateg'> English </span>
            </a>
            <a href='/category/featured/'>
              <span className='hcategory hccateg'> Trending </span>
            </a>
            <a href='/category/web-series/netflix/'>
              <span className='hcategory hccateg'> Netflix </span>
            </a>
            <a href='/category/web-series/mx-original/'>
              <span className='hcategory hccateg'> MXPlayer </span>
            </a>
            <a href='/category/web-series/amazon-prime-video/'>
              <span className='hcategory hccateg'> Amazon Prime</span>
            </a>
            <a href='/category/web-series/disney-plus-hotstar/'>
              <span className='hcategory hccateg'> Disney+ </span>
            </a>
            <a href='/category/web-series/apple-tv/'>
              <span className='hcategory hccateg'> Apple TV+ </span>
            </a>
            <a href='/category/korean-series/'>
              <span className='hcategory hccateg'> K-Drama Series </span>
            </a>
            <a href='/download-marvel-cinematic-universe-2008-2021-imax-web-dl-dual-audio-hindi-720p-1080p-2160p/'>
              <span className='hcategory hccateg'> Marvel Cinematic </span>
            </a>
            <a href='/category/movies-collection/'>
              <span className='hcategory hccateg'> Movies Collection </span>
            </a>
          </div>

          <center>
            <div className='alerrt'>
              <span
                className='closebtn'
                // onclick="this.parentElement.style.display='none';"
              >
                ×
              </span>
              <center>
                <font color='#ffffff'>
                  Simply <strong>Comment on Post</strong> if you found any
                  Broken Link we will fix it for you within next 24 Hours with
                  Guaranteed and Great Support.
                </font>
              </center>
            </div>
          </center>

          <div id='primary-content-wrap' className='primary-content-wrap'>
            <div className='primary-content-control'>
              <div className='site__container fullwidth-vidorev-ctrl container-control'>
                <div className='site__row sidebar-direction'>
                  <main id='main-content' className='site__col main-content'>
                    <div className='blog-wrapper global-blog-wrapper blog-wrapper-control'>
                      <div className='blog-items blog-items-control site__row movie-grid'>
                        <article
                          id='post-152486'
                          className='post-item site__col post-152486 post type-post status-publish format-standard has-post-thumbnail sticky hentry category-amazon-prime-video category-1080p category-26220 category-480p category-720p category-dual-audio-series category-featured category-thriller tag-the-devils-hour'
                        >
                          <div className='post-item-wrap'>
                            <div className='blog-pic'>
                              <div className='blog-pic-wrap'>
                                <a
                                  data-post-id='152486'
                                  href='https://vegamovies.de/download-the-devils-hour-amazon-original-2022-season-1-dual-audio-hindi-480p-720p-1080p/'
                                  title='Download The Devil&#8217;s Hour &#8211; Amazon Original (2022) Season 1 Dual Audio {Hindi-English} 480p [900MB] | 720p [2GB] | 1080p [7GB] WEB-DL'
                                  className='blog-img'
                                >
                                  <img
                                    className='blog-picture ul-normal-classNameic'
                                    src='https://sportshub.cbsistatic.com/i/2022/11/21/4d1fe194-2496-4923-af07-11f47ca498bf/avatar-the-way-of-water-character-posters-1.jpg?auto=webp&width=608&height=900&crop=0.676:1,smart'
                                    srcSet='
                                                                https://sportshub.cbsistatic.com/i/2022/11/21/4d1fe194-2496-4923-af07-11f47ca498bf/avatar-the-way-of-water-character-posters-1.jpg?auto=webp&width=608&height=900&crop=0.676:1,smart 165w,
                                            https://sportshub.cbsistatic.com/i/2022/11/21/4d1fe194-2496-4923-af07-11f47ca498bf/avatar-the-way-of-water-character-posters-1.jpg?auto=webp&width=608&height=900&crop=0.676:1,smart 200w,
                                            https://sportshub.cbsistatic.com/i/2022/11/21/4d1fe194-2496-4923-af07-11f47ca498bf/avatar-the-way-of-water-character-posters-1.jpg?auto=webp&width=608&height=900&crop=0.676:1,smart 300w
                                          '
                                    sizes='(max-width: 165px) 100vw, 165px'
                                    alt='The Devil’s Hour (2022–)'
                                  />
                                  <span className='ul-placeholder-bg className-2x3'></span>
                                </a>
                              </div>
                            </div>
                            <div className='listing-content'>
                              <div className='mytime'>
                                <div className='date-time'>
                                  <i
                                    className='fa fa-calendar'
                                    aria-hidden='true'
                                  ></i>
                                  <span>28 Oct 2022</span>
                                </div>
                              </div>

                              <h3 className='entry-title h5 h6-mobile post-title'>
                                <a
                                  href='https://vegamovies.de/download-the-devils-hour-amazon-original-2022-season-1-dual-audio-hindi-480p-720p-1080p/'
                                  title='Download The Devil&#8217;s Hour &#8211; Amazon Original (2022) Season 1 Dual Audio {Hindi-English} 480p [900MB] | 720p [2GB] | 1080p [7GB] WEB-DL'
                                >
                                  {/* Download The Devil&#8217;s Hour &#8211; Amazon
                                  Original (2022) Season 1 Dual Audio
                                  {Hindi - English} 480p [900MB] | 720p [2GB] |
                                  1080p [7GB] WEB-DL */}
                                </a>
                              </h3>
                            </div>
                          </div>
                        </article>
                        <article
                          id='post-149279'
                          className='post-item site__col post-149279 post type-post status-publish format-standard has-post-thumbnail sticky hentry category-netflix category-1080p category-26220 category-480p category-720p category-drama category-dual-audio-series category-featured category-horror category-mystery category-thriller tag-guillermo-del-toros-cabinet-of-curiosities-netflix-original-2022-season-1'
                        >
                          <div className='post-item-wrap'>
                            <div className='blog-pic'>
                              <div className='blog-pic-wrap'>
                                <a
                                  data-post-id='149279'
                                  href='https://vegamovies.de/download-guillermo-del-toros-cabinet-of-curiosities-2022-season-1-hindi-dubbed-480p-720p-1080p-web-dl/'
                                  title='Download Guillermo Del Toro&#8217;s Cabinet of Curiosities &#8211; Netflix Original (2022) Season 1 Dual Audio {Hindi-English} 480p | 720p | 1080p WEB-DL'
                                  className='blog-img'
                                >
                                  <img
                                    className='blog-picture ul-normal-classNameic'
                                    src='https://vegamovies.de/wp-content/uploads/2022/10/Guillermo-Del-Toro-Episodes-6-8-165x248.jpg'
                                    srcSet='
                                                                https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg 165w,
                                            https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg 200w,
                                            https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg 300w
                                          '
                                    sizes='(max-width: 165px) 100vw, 165px'
                                    alt='Guillermo Del Toro Episodes 6-8'
                                  />
                                  <span className='ul-placeholder-bg className-2x3'></span>
                                </a>
                              </div>
                            </div>
                            <div className='listing-content'>
                              <div className='mytime'>
                                <div className='date-time'>
                                  <i
                                    className='fa fa-calendar'
                                    aria-hidden='true'
                                  ></i>
                                  <span>28 Oct 2022</span>
                                </div>
                              </div>

                              <h3 className='entry-title h5 h6-mobile post-title'>
                                <a
                                  href='https://vegamovies.de/download-guillermo-del-toros-cabinet-of-curiosities-2022-season-1-hindi-dubbed-480p-720p-1080p-web-dl/'
                                  title='Download Guillermo Del Toro&#8217;s Cabinet of Curiosities &#8211; Netflix Original (2022) Season 1 Dual Audio {Hindi-English} 480p | 720p | 1080p WEB-DL'
                                >
                                  {/* Download Guillermo Del Toro&#8217;s Cabinet of
                                  Curiosities &#8211; Netflix Original (2022)
                                  Season 1 Dual Audio {Hindi - English} 480p |
                                  720p | 1080p WEB-DL */}
                                </a>
                              </h3>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className='blog-pagination blog-pagination-control'>
                        <div className='wp-pagenavi-wrapper h6'>
                          <div className='wp-pagenavi' role='navigation'>
                            <span aria-current='page' className='current'>
                              1
                            </span>
                            <a
                              className='page larger'
                              title='Page 2'
                              href='https://vegamovies.de/page/2/'
                            >
                              2
                            </a>
                            <a
                              className='page larger'
                              title='Page 3'
                              href='https://vegamovies.de/page/3/'
                            >
                              3
                            </a>
                            <span className='extend'>...</span>
                            <a
                              className='nextpostslink'
                              rel='next'
                              aria-label='Next Page'
                              href='https://vegamovies.de/page/2/'
                            >
                              Next »
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>

          <footer id='site-footer' className='site-footer'>
            <div className='footer-wrapper dark-background'>
              <div className='footer-copyright'>
                <div className='site__container fullwidth-vidorev-ctrl'>
                  <div className='site__row'>
                    <div className='site__col font-size-12'>
                      <div className='default-copyright'>
                        Copyright &copy; 2020. Created by ❤️ Vegamovies Team ❤️
                      </div>
                      <hr />
                      <span>
                        <center>
                          <a href='/contact-us/' data-wpel-link='internal'>
                            🏤 Contact Us
                          </a>
                          |
                          <a href='#' data-wpel-link='internal'>
                            ⛽ Request Us
                          </a>
                          |
                          <a href='/dmca/' data-wpel-link='internal'>
                            📔 DMCA
                          </a>{" "}
                          |
                          <a href='/about-us/' data-wpel-link='internal'>
                            🏆 About Us
                          </a>
                          |
                          <a
                            href='/sitemap_index.xml'
                            data-wpel-link='internal'
                          >
                            📰 Sitemap
                          </a>
                        </center>
                      </span>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Header;
