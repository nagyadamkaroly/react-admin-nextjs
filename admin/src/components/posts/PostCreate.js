import React from 'react';
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    BooleanInput,
    DateTimeInput,
    ImageInput,
    ImageField,
    useNotify, 
    useRefresh, 
    useRedirect, 

} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';


const PostCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/posts');
        refresh();
    };

    return (
        <Create onSuccess={onSuccess} {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="content" />
                <DateTimeInput source="published_at" />
                <BooleanInput label="Status" source="status" />
                <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <RichTextInput 
                    source="body" 
                
                />
            </SimpleForm>
        </Create>
    );

}

export default PostCreate