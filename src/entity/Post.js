import {EntitySchema} from 'typeorm';

const postSchema = new EntitySchema({
	name: 'post',
	tableName: 'post',
	columns: {
		id: {
			type: 'int',
			primary: true,
			generated: true,
		},
		name: {
			type: 'varchar',
			length: 255,
		},
		author: {
			type: 'varchar',
			length: 255,
			nullable: true,
		},
		place: {
			type: 'varchar',
			length: 255,
		},
		description: {
			type: 'varchar',
			length: 255,
		},
		// like: { 
		// 	type: 'int',
		// },

		//댓글
		// comments: {
		// 	type: 'varchar',
		// 	length: 255,
		// },
	},
});

export default postSchema;
