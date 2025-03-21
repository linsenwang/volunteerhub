import React, { useState } from "react";
import { Checkbox, Grid, Typography } from "@mui/material";

const timeSlots = ["上午", "下午"];
const weekDays = ["一", "二", "三", "四", "五", "六", "日"];

export default function CheckboxGrid({ onSelectionChange }) {
    const [selectedSlots, setSelectedSlots] = useState({});
  
    const handleChange = (day, slot) => {
      setSelectedSlots((prev) => {
        const newSlots = { ...prev };
        if (!newSlots[day]) newSlots[day] = [];
        if (newSlots[day].includes(slot)) {
          newSlots[day] = newSlots[day].filter((s) => s !== slot);
        } else {
          newSlots[day].push(slot);
        }
        const updatedSlots = { ...newSlots };
  
        // 触发外部回调
        if (onSelectionChange) {
          onSelectionChange(updatedSlots);
        }
  
        return updatedSlots;
      });
    };
  
    return (
      <Grid container spacing={2} margin={0.3}>
        {/* 第一行：星期标题 */}
        <Grid container item spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Typography>时间</Typography>
          </Grid>
          {weekDays.map((day) => (
            <Grid item xs={1.3} key={day}>
              <Typography align="center">{day}</Typography>
            </Grid>
          ))}
        </Grid>
  
        {/* 上午、下午行 */}
        {timeSlots.map((slot) => (
          <Grid container item spacing={2} alignItems="center" key={slot}>
            {/* 左侧时间段标题 */}
            <Grid item xs={2}>
              <Typography variant="body1">{slot}</Typography>
            </Grid>
            {/* 复选框部分 */}
            {weekDays.map((day) => (
              <Grid item xs={1.3} key={`${day}-${slot}`} container justifyContent="center">
                <Checkbox
                  checked={selectedSlots[day]?.includes(slot) || false}
                  onChange={() => handleChange(day, slot)}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    );
  }
  