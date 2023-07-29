import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./ColorSelect.css";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ColorSelectModal({
  selectedColor,
  setSelectedColor,
  isOpen,
  handleClose,
  options,
}) {
  function selectThisColor(e) {
    if (e.target.value === selectedColor) {
      setSelectedColor();
    } else {
      setSelectedColor(e.target.value);
    }
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select any color
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          {Object.keys(options).length ? (
            <div>
              <div>
                {Object.keys(options).map((item) => {
                  return (
                    <button
                      className={
                        item === selectedColor
                          ? "selectedOption"
                          : "colorOption"
                      }
                      value={item}
                      onClick={selectThisColor}
                    >
                      {item} ({options[item]})
                      <div
                        style={{ backgroundColor: item, height: 20, width: 20 }}
                      ></div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
