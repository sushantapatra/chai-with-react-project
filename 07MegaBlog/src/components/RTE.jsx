import React, { useId } from "react";
import { Editor } from "@tinymce/tinymce-react";
import config from "../conf/config";
import { Controller } from "react-hook-form";
//config.tinyeditorId
const RTE = ({ name, control, label, defaultValue = "" }) => {
	const id = useId();
	return (
		<div className="w-full">
			{label && (
				<label className="inline-block mb-1 pl-1" htmlFor={id}>
					{label}
				</label>
			)}
			<Controller
				name={name || "content"}
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange } }) => (
					<Editor
						apiKey={config.tinyeditorId}
						initialValue={defaultValue}
						menubar:true
						init={{
							height: 500,
							menubar: false,
							plugins: [
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"preview",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"code",
								"help",
								"wordcount",
							],
							toolbar:
								"undo redo | blocks | " +
								"bold italic forecolor | alignleft aligncenter " +
								"alignright alignjustify | bullist numlist outdent indent | " +
								"removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
						onEditorChange={onChange}
					/>
				)}
			/>
		</div>
	);
};

export default RTE;
