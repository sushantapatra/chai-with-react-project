import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setcharacterAllowed] = useState(false);
	const [passward, setPassword] = useState("");

	//user ref
	const passwordRef = useRef(null);

	const newPasswordGenerator = useCallback(() => {
		let pass = "";
		let passStr = "ABCDEFIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxuz";
		if (numberAllowed) passStr += "0123456789";
		if (characterAllowed) passStr += "!@#$%&*_~";
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * passStr.length + 1);
			pass += passStr.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, characterAllowed, setPassword]);

	const copyPasswordToClipBoard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 33);
		window.navigator.clipboard.writeText(passward);
	}, [passward]);

	useEffect(() => {
		newPasswordGenerator();
	}, [length, numberAllowed, characterAllowed, newPasswordGenerator]);

	return (
		<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-500">
			<h1 className="text-white text-center my-3 ">Password Generator</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					type="text"
					value={passward}
					className="outline-none w-full py-1 px-3"
					placeholder="password"
					readOnly
					ref={passwordRef}
				/>
				<button
					className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
					onClick={copyPasswordToClipBoard}>
					Copy
				</button>
			</div>
			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						className="cursor-pointer"
						min={6}
						max={100}
						value={length}
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<label htmlFor="length">Length :{length}</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						className="cursor-pointer"
						defaultChecked={numberAllowed}
						id="numberInput"
						onChange={() => {
							setNumberAllowed((prev) => !prev);
						}}
					/>
					<label htmlFor="length">Numbers</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						className="cursor-pointer"
						defaultChecked={numberAllowed}
						id="numberInput"
						onChange={() => {
							setcharacterAllowed((prev) => !prev);
						}}
					/>
					<label htmlFor="length">Characters</label>
				</div>
			</div>
		</div>
	);
};

export default PasswordGenerator;
