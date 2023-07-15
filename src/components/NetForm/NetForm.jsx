import React from "react";

export default function NetForm() {
  return (
    <form
      // onSubmit="submit"
      name="emailform"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="emailform" />
      <div>
        <input type="text" name="phone" />
      </div>
    </form>
  );
}
