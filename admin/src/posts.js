import React from 'react';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter,
    BooleanInput,
    DateInput,
    DateTimeInput,
    ImageInput,
    ImageField,
    Toolbar,
    SaveButton,
    DeleteButton,
    useNotify, 
    useRefresh, 
    useRedirect, 

} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

import RichTextInput from 'ra-input-rich-text';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="content" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const PostEdit = props => (
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




export const PostCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/posts');
        refresh();
    };

    const classes = useStyles();


    return (
        <Create onSuccess={onSuccess} {...props}>
            <div >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper>xs=6</Paper>
                </Grid>
            </Grid>
            </div>
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