import React, { Component } from 'react'
import { login } from './UserFuctions'
//import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { MDBIcon,MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";
import ReactSnackBar from "react-js-snackbar";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},


      Show: false,
      Showing: false,
      message:''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      console.log(res)
      if (res.token && res.status=="success") {
        this.props.history.push(`/home`)
      }
      else{
        // this.props.history.push(`/error`)
        // console.log(res.error)
        console.log(res.message)
        this.show(res.message)
      }
    })
  }

  show = (message) => {
    console.log(message)
    if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true,message:message });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 2000);
  };

  render() {
    return (
      <div style={{marginBottom:"20vh"}}>
      <MDBContainer className="m-3 mb-12" >
      <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
      <MDBFreeBird>
        <MDBRow>
          <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
            <MDBCardBody>
              {/* <MDBCardTitle><strong>Welcome</strong></MDBCardTitle> */}
              {/* <p className="pb-4">Example of Material Design Form</p> */}

      <form onSubmit={this.onSubmit}>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input 
        type="email"  className="form-control" 
        name="email"
        placeholder="Enter email"
        value={this.state.email}
        onChange={this.onChange}
        />
        <br />
        
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input
        type="password"  className="form-control" 
        name="password"
        placeholder="Password"
        value={this.state.password}
        onChange={this.onChange}
        />
        <div className="text-center mt-4">
          {/* <MDBBtn color="indigo" type="submit">Login</MDBBtn> */}
          <button
                type="submit"
                className="btn btn-lg btn-primary "
              >Login</button>
        </div>
      </form>


              <div className="my-2">
                <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>:)</p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    </MDBContainer>

        <div>
            <ReactSnackBar Icon={<MDBIcon icon="newspaper" />} Show={this.state.Show}>
              {this.state.message}
            </ReactSnackBar>
        </div>


    </div>







      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-6 mt-5 mx-auto">
      //       <form noValidate onSubmit={this.onSubmit}>
      //         <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      //         <div className="form-group">
      //           <label htmlFor="email">Email address</label>
      //           <input
                  // type="email"
                  // className="form-control"
                  // name="email"
                  // placeholder="Enter email"
                  // value={this.state.email}
                  // onChange={this.onChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="password">Password</label>
      //           <input
      //             type="password"
      //             className="form-control"
                  // name="password"
                  // placeholder="Password"
                  // value={this.state.password}
                  // onChange={this.onChange}
      //           />
      //         </div>
              // <button
              //   type="submit"
              //   className="btn btn-lg btn-primary btn-block"
              // >
      //           Sign in
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Login



{/* <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={this.onSubmit}>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input 
          type="email"
          id="defaultFormLoginEmailEx" 
          className="form-control"
          value={this.state.email}
          onChange={this.onChange}
          />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input 
          type="password"
          id="defaultFormLoginPasswordEx" 
          className="form-control"
          value={this.state.password}
          onChange={this.onChange}
          />
        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer> */}