import React from 'react';
import { connect } from 'react-redux';
import { Sticky, StickyContainer } from 'react-sticky';


export class IconDetails extends React.Component {


  render() {
    const { hovered } = this.props;
    const details = hovered && <h1>{this.props.hovered.name}</h1>;
    return (
      <StickyContainer className="icon-details">
        <Sticky className="icon-details__main">
          {details}
        </Sticky>
      </StickyContainer>
    );
  }
}

const mapStateToProps = ({ icons: { hovered } }) => ({ hovered });

export default connect(mapStateToProps)(IconDetails);
