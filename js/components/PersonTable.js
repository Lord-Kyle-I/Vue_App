import DataTable from "./DataTable";
import PersonRow from "./PersonRow";

const PersonTable= {
    props: {
        data: {type: Array, required: true}
    },
    data() {
        return {
            filters: [

            ]
        }
    },
    components: {
        DataTable,
        PersonRow
    },
    template: `
        <data-table sorts="" table-data="">
            <template #filters>
              
            </template>
            <template #row-content="{ data }">
                <person-row :person="data"></person-row>
            </template>
        </data-table>
    `
}

export default PersonTable;