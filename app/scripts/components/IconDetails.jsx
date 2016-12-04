import React from 'react';
import { connect } from 'react-redux';

const IconDetails = ({ hovered }) => (
  <div className="icon-details">
    {hovered && <h1>{hovered.name}</h1>}
  </div>
)

const mapStateToProps = ({ icons: { hovered } }) => ({ hovered });
export default connect(mapStateToProps)(IconDetails);
