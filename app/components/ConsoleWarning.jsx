"use client";

import { useEffect } from "react";

export default function ConsoleWarning() {
	useEffect(() => {
		const warningStyles = [
			"color: #ff6b6b",
			"background: #2d2d2d",
			"font-size: 48px",
			"font-weight: bold",
			"padding: 20px",
			"text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)",
			"border-radius: 10px",
			"line-height: 1.5",
		].join(";");

		console.log("%cHold Up! 🚫", warningStyles);
		console.log(
			"%cLooking for something? I'd love to chat about code! Reach me out at https://twitter.com/geekayush",
			"font-size: 16px; color: #a8a8a8; font-weight: bold;"
		);
	}, []); // Empty dependency array means this runs once when component mounts

	return null; // This component doesn't render anything visible
}
