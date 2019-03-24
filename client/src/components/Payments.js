import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
    this.showTooltipHandler = this.showTooltipHandler.bind(this);
  }
  showTooltipHandler() {
    this.setState(prevState => ({
      showTooltip: !prevState.showTooltip
    }));
  }
  render() {
    return (
      <div>
        <StripeCheckout
          name="SURVEYYAY"
          description="Test CC: 4242 4242 4242 4242"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button
            onMouseEnter={this.showTooltipHandler}
            onMouseLeave={this.showTooltipHandler}
            className="btn"
          >
          ADD CREDITS
          {this.state.showTooltip && <div style={{ backgroundColor: 'grey', position: 'relative', top: '-14px', fontSize: '10px' }}>Use Stripe API's test credit card number: 4242 4242 4242 4242 to test payment feature</div>}
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
