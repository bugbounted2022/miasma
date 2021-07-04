// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// NewReloadAppParams creates a new ReloadAppParams object
// with the default values initialized.
func NewReloadAppParams() *ReloadAppParams {
	var ()
	return &ReloadAppParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewReloadAppParamsWithTimeout creates a new ReloadAppParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewReloadAppParamsWithTimeout(timeout time.Duration) *ReloadAppParams {
	var ()
	return &ReloadAppParams{

		timeout: timeout,
	}
}

// NewReloadAppParamsWithContext creates a new ReloadAppParams object
// with the default values initialized, and the ability to set a context for a request
func NewReloadAppParamsWithContext(ctx context.Context) *ReloadAppParams {
	var ()
	return &ReloadAppParams{

		Context: ctx,
	}
}

// NewReloadAppParamsWithHTTPClient creates a new ReloadAppParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewReloadAppParamsWithHTTPClient(client *http.Client) *ReloadAppParams {
	var ()
	return &ReloadAppParams{
		HTTPClient: client,
	}
}

/*ReloadAppParams contains all the parameters to send to the API endpoint
for the reload app operation typically these are written to a http.Request
*/
type ReloadAppParams struct {

	/*AppName
	  App name from the `-a|--app` flag

	*/
	AppName string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the reload app params
func (o *ReloadAppParams) WithTimeout(timeout time.Duration) *ReloadAppParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the reload app params
func (o *ReloadAppParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the reload app params
func (o *ReloadAppParams) WithContext(ctx context.Context) *ReloadAppParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the reload app params
func (o *ReloadAppParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the reload app params
func (o *ReloadAppParams) WithHTTPClient(client *http.Client) *ReloadAppParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the reload app params
func (o *ReloadAppParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppName adds the appName to the reload app params
func (o *ReloadAppParams) WithAppName(appName string) *ReloadAppParams {
	o.SetAppName(appName)
	return o
}

// SetAppName adds the appName to the reload app params
func (o *ReloadAppParams) SetAppName(appName string) {
	o.AppName = appName
}

// WriteToRequest writes these params to a swagger request
func (o *ReloadAppParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param appName
	if err := r.SetPathParam("appName", o.AppName); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
