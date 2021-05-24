import React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,

} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';


const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = props => {
    return (
        <Edit title={<PostTitle />} {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="id" />
                <TextInput source="title" />
                <TextInput multiline source="content" />
            </SimpleForm>
        </Edit>
    );

}

export default PostEdit