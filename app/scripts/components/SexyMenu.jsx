import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import { constant, range } from 'lodash';

const DEG_TO_RAD = Math.PI / 180;
const MAIN_BUTTON_DIAM = 100;
const CHILD_BUTTON_DIAM = 50;
const CHILD_ICONS = 5;
const M_X = 500;
const M_Y = 450;

const RADIUS = 120;
const SEPARATION_ANGLE = 40;

//
const FAN_ANGLE = (CHILD_ICONS - 1) * SEPARATION_ANGLE;
const BASE_ANGLE = (180 - FAN_ANGLE) / 2;

const toRadians = (deg) => deg * DEG_TO_RAD;

const deltaPosition = (index, completion) => {
  const angle = BASE_ANGLE + (index * SEPARATION_ANGLE);
  const dX = RADIUS * Math.cos(toRadians(angle)) * completion;
  const dY = RADIUS * Math.sin(toRadians(angle)) * completion;
  return {
    dX: dX + CHILD_BUTTON_DIAM / 2,
    dY: dY + CHILD_BUTTON_DIAM / 2
  };
};

class SexyMenu extends React.Component {
  state = { isOpen: false }

  mainButtonStyle(completion) {
    const deg = 90 * completion;

    return {
      width: MAIN_BUTTON_DIAM,
      height: MAIN_BUTTON_DIAM,
      top: M_Y - MAIN_BUTTON_DIAM / 2,
      left: M_X - MAIN_BUTTON_DIAM / 2,
      transform: `rotate(${deg}deg)`,
    };
  }

    childButtonStyle(index, completion) {
    const deg = 360 * completion;
    const { dX, dY } = deltaPosition(index, completion);
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: M_Y - dY,
      left: M_X - dX,
      transform: `rotate(${deg}deg)`,
    };
  }

  render() {
    const { isOpen } = this.state;
    const completion = isOpen ? 1 : 0;
    const springParams = { stiffness: 210, damping: 16 };
    const defaultStyles = range(CHILD_ICONS).map(constant({ completion: 0 }));

    return (
      <div>
        <StaggeredMotion defaultStyles={defaultStyles} styles={(previousStyles) => {
          return previousStyles.map((prev, i) => {
            if (i === 0) {
              return { completion: spring(completion, springParams) };
            }
            const lastButtonCompletion = previousStyles[i - 1].completion;
            const thisButtonCompletion = previousStyles[i].completion;
            const shouldAnimate = isOpen ? lastButtonCompletion > 0.2 : lastButtonCompletion < 0.8;
            return { completion: shouldAnimate ? spring(completion, springParams) : thisButtonCompletion };

          });
        }}>
          {(interpolatedStyles) => {
            // Interpolated styles updates on every change
            // [array of percentages here]
            const leaderPercent = interpolatedStyles[0].completion;
            return <div>
              {interpolatedStyles.map(({ completion }, index) => {
                const style = this.childButtonStyle(index, completion);
                return (
                  <div className="child-button flex--center-all" style={style} key={index}>
                    :)
                  </div>
                );
              })}
              <div className="main-button flex--center-all" style={this.mainButtonStyle(leaderPercent)}
                   onClick={this.toggleMenu}>
                X
              </div>
            </div>
          }}
        </StaggeredMotion>
      </div>
    );
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState(s => ({ isOpen: !s.isOpen }));
  }
}

export default SexyMenu;
