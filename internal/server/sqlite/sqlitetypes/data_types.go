package sqlitetypes

import (
	"database/sql/driver"
	"encoding/json"
	"fmt"

	"github.com/aklinker1/miasma/internal"
	"github.com/aklinker1/miasma/internal/server"
)

// blob -> []string

type stringArray []string

func StringArray(a any) any {
	switch a := a.(type) {
	case []string:
		return (*stringArray)(&a)
	case *[]string:
		return (*stringArray)(a)
	}
	return nil
}

// Scan implements the sql.Scanner interface.
func (a *stringArray) Scan(src interface{}) error {
	switch src := src.(type) {
	case []byte:
		return json.Unmarshal(src, a)
	case string:
		return json.Unmarshal([]byte(src), a)
	case nil:
		*a = nil
		return nil
	}

	return &server.Error{
		Code:    server.EINTERNAL,
		Message: fmt.Sprintf("Failed to scan %+v (%T) into a []string", src, src),
		Op:      "StringArray.Scan",
	}
}

// Value implements the driver.Valuer interface.
func (array stringArray) Value() (driver.Value, error) {
	return json.Marshal(array)
}

// blob -> []int32

type int32Array []int32

func Int32Array(a any) any {
	switch a := a.(type) {
	case []int32:
		return (*int32Array)(&a)
	case *[]int32:
		return (*int32Array)(a)
	}
	return nil
}

// Scan implements the sql.Scanner interface.
func (a *int32Array) Scan(src interface{}) error {
	switch src := src.(type) {
	case []byte:
		return json.Unmarshal(src, a)
	case string:
		return json.Unmarshal([]byte(src), a)
	case nil:
		*a = nil
		return nil
	}

	return &server.Error{
		Code:    server.EINTERNAL,
		Message: fmt.Sprintf("Failed to scan %+v (%T) into a []int32", src, src),
		Op:      "int32Array.Scan",
	}
}

// Value implements the driver.Valuer interface.
func (array int32Array) Value() (driver.Value, error) {
	return json.Marshal(array)
}

// blob -> []*internal.BoundVolume

type boundVolumeArray []*internal.BoundVolume

func BoundVolumeArray(a any) any {
	switch a := a.(type) {
	case []*internal.BoundVolume:
		return (*boundVolumeArray)(&a)
	case *[]*internal.BoundVolume:
		return (*boundVolumeArray)(a)
	}
	return nil
}

// Value implements the driver.Valuer interface.
func (array boundVolumeArray) Value() (driver.Value, error) {
	return json.Marshal(array)
}

// Scan implements the sql.Scanner interface.
func (a *boundVolumeArray) Scan(src interface{}) error {
	switch src := src.(type) {
	case []byte:
		return json.Unmarshal(src, a)
	case string:
		return json.Unmarshal([]byte(src), a)
	case nil:
		*a = nil
		return nil
	}

	return &server.Error{
		Code:    server.EINTERNAL,
		Message: fmt.Sprintf("Failed to scan %+v (%T) into a []*internal.BoundVolume", src, src),
		Op:      "boundVolumeArray.Scan",
	}
}

// string -> internal.PluginName

type pluginName internal.PluginName

func PluginName(s any) any {
	switch s := s.(type) {
	case internal.PluginName:
		return (*pluginName)(&s)
	case *internal.PluginName:
		return (*pluginName)(s)
	}
	return nil
}

// Scan implements the sql.Scanner interface.
func (name *pluginName) Scan(src interface{}) error {
	if str, ok := src.(string); ok {
		if str == internal.PluginNameTraefik.String() {
			*name = pluginName(internal.PluginNameTraefik)
			return nil
		}
	}

	return &server.Error{
		Code:    server.EINTERNAL,
		Message: fmt.Sprintf("Failed to scan %+v (%T) into a internal.PluginName", src, src),
		Op:      "pluginName.Scan",
	}
}

// Value implements the driver.Valuer interface.
func (name pluginName) Value() (driver.Value, error) {
	return string(name), nil
}

// blob -> map[string]any

type jsonBlob map[string]any

func JSON(a any) any {
	switch a := a.(type) {
	case map[string]any:
		return (*jsonBlob)(&a)
	case *map[string]any:
		return (*jsonBlob)(a)
	}
	return nil
}

// Value implements the driver.Valuer interface.
func (array jsonBlob) Value() (driver.Value, error) {
	return json.Marshal(array)
}

// Scan implements the sql.Scanner interface.
func (a *jsonBlob) Scan(src interface{}) error {
	switch src := src.(type) {
	case []byte:
		return json.Unmarshal(src, a)
	case string:
		return json.Unmarshal([]byte(src), a)
	case nil:
		*a = nil
		return nil
	}

	return &server.Error{
		Code:    server.EINTERNAL,
		Message: fmt.Sprintf("Failed to scan %+v (%T) into a map[string]any", src, src),
		Op:      "jsonMap.Scan",
	}
}
