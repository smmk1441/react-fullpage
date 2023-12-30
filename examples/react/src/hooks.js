import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '../../../components';
import Styles from './styles.css';
import backgroundImage from '/assets/images/backgroundhana.png';
import backgroundImage1 from '/assets/images/nail1.png';
import backgroundImage2 from '/assets/images/heya1.png';
import styled from 'styled-components';
import Button from './components/Button';
import Margin from './components/Margin';
import ModalWindow from './components/ModalWindow';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// あなたのコンポーネント
function YourComponent() {
  useEffect(() => {
    document.title = "あなたのサイトのタイトル";
  }, []);

  // あなたのコンポーネントの他の部分
}

// スタイルオブジェクトの作成
const sectionStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover', // 画像を要素に合わせて伸縮
  backgroundRepeat: 'no-repeat', // 画像を繰り返さない
};

const sectionStyle1 = {
  backgroundImage: `url(${backgroundImage1})`,
  backgroundSize: 'cover', // 画像を要素に合わせて伸縮
  backgroundRepeat: 'no-repeat', // 画像を繰り返さない
};

const sectionStyle2 = {
  backgroundImage: `url(${backgroundImage2})`,
  backgroundSize: 'cover', // 画像を要素に合わせて伸縮
  backgroundRepeat: 'no-repeat', // 画像を繰り返さない
};

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const originalColors = [
    '#0798ec',
    '#0798ec',
    '#0798ec',
    '#ff5f45',
    'orange',
    '#0798ec',
    'purple',
    'yellow',
  ],
  originalPages = [
    { text: 'YUMO NAIL', textdetail: '', style: sectionStyle },
    { text: 'Menu', style: sectionStyle1 },
    { text: 'Shop Info', style: sectionStyle2 },
  ];

const Hooks = () => {
  const [sectionsColor, setsectionsColor] = useState([...originalColors]),
    [fullpages, setfullpages] = useState([...originalPages]);

  const onLeave = (origin, destination, direction) => {
      console.log('onLeave', { origin, destination, direction });
      // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    },
    handleChangeColors = () => {
      const newColors =
        sectionsColor[0] === 'yellow'
          ? [...originalColors]
          : ['yellow', 'blue', 'white'];
      return setsectionsColor(newColors);
    },
    handleAddSection = () => {
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });
      return setfullpages([...fullpages]);
    },
    handleRemoveSection = () => {
      const newPages = [...fullpages];
      newPages.pop();
      return setfullpages(newPages);
    },
    moveSectionDown = () => {
      return fullpage_api.moveSectionDown();
    };

  const Menu = () => (
    <div
      className="menu"
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className="actions">
        <li>
          <button onClick={() => window.location.href = 'https://www.instagram.com/a.yuy.m_nail/'}> Instagram </button>
        </li>
      </ul>
    </div>
  );
  const [isShow, setIsShow] = useState(false);
  const handleClickOn = useCallback(() => setIsShow(true), []);
  const handleClickOff = useCallback(() => setIsShow(false), []);

  const buttonTheme = {
    background: 'orange',
    color: '#ffffff',
  };

  const buttonSize = {
    fontSize: '1vmin',
    padding: '2vmin 4vmin',
  };

  return (
    <div className="App">
      { <Menu /> }

      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        pluginWrapper={pluginWrapper}
        // fullpage options
        licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        render={() => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ text, textdetail, style }) => {
              if (text === 'YUMO NAIL') {
                // YUMO NAILの場合の処理
                return (
                  <div key={text} className={SEL} style={style}>
                    <a onClick={handleClickOn} tabindex="-1">
                      <h1>{text}</h1>
                    </a>

                    <ModalWindow
                      title="施術者情報"
                      text="工事中"
                      topichi="50%"
                      isShow={isShow}
                      onClick={handleClickOff}
                      isShowCloseButton={false}
                    >
                      <Margin top="2vmin" right="1vmin">
                        <Button onClick={handleClickOff} size={buttonSize}>
                          閉じる
                        </Button>
                      </Margin>
                    </ModalWindow>
                  </div>
                );
                } else if (text === 'Menu') {
                // Menuの場合の処理
                return (
                  <div key={text} className={SEL} style={style}>
                    <a onClick={handleClickOn} tabindex="-1">
                      <h1>{text}</h1>
                    </a>

                    <ModalWindow
                      title="メニュー情報"
                      text="工事中"
                      topichi="150%"
                      isShow={isShow}
                      onClick={handleClickOff}
                      isShowCloseButton={false}
                    >
                      <Margin top="2vmin" right="1vmin">
                        <Button onClick={handleClickOff} size={buttonSize}>
                          閉じる
                        </Button>
                      </Margin>
                    </ModalWindow>
                  </div>
                );
              } else if (text === 'Shop Info') {
                // Menuの場合の処理
                return (
                  <div key={text} className={SEL} style={style}>
                    <a onClick={handleClickOn} tabindex="-1">
                      <h1>{text}</h1>
                    </a>

                    <ModalWindow
                      title="ショップ情報"
                      text="工事中"
                      topichi="250%"
                      isShow={isShow}
                      onClick={handleClickOff}
                      isShowCloseButton={false}
                    >
                      <Margin top="2vmin" right="1vmin">
                        <Button onClick={handleClickOff} size={buttonSize}>
                          閉じる
                        </Button>
                      </Margin>
                    </ModalWindow>
                  </div>
                );
              }
            })}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};
const rootElement = document.getElementById('react-root');
ReactDOM.render(<Hooks />, rootElement);
