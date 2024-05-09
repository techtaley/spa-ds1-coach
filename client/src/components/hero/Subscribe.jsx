import React from 'react'

export default function Subscribe() {
  return (
    <div className="subscriber-above-div">
        <form className="subscriber-above-div-form">
            <fieldset>
                <legend><h2>Subscribe</h2></legend>
                <div className="formInput">
                    <label for="website" className="form-label"></label>
                    <input id="0" placeholder="enter text" name="website" className="no-show" index="0" aria-label="website" />
                    <span className="form-error-msg"></span>
                </div>

            </fieldset>
        </form>
    </div>
  )
}
