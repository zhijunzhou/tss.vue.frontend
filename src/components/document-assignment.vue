<template>
	<div>
		<div class="row">
			<div class="col-lg-8 form-inline mb-2">					
					<b-input-group>
						<b-form-input placeholder="opportunity-data" v-model="deletingName"></b-form-input>
						<b-input-group-button>
							<b-btn variant="outline-info" @click="deleteSection(deletingName, $event)">Delete</b-btn>
						</b-input-group-button>
					</b-input-group>
			</div>
			<div class="col-lg-4 text-right">
				<b-btn @click="addSection">Add Section</b-btn>&nbsp;
				<b-btn @click="saveDocument('document', $event)" variant="outline-success">Save</b-btn>    
			</div>
		</div>
		<div class="row">		
			<div class="col-md-3 left-menu">
				<document-basic :odocument="odocument" :acsctn.sync="activedSection"></document-basic>
				<document-sections :odocument="odocument" :acsctn.sync="activedSection" v-if="odocument"></document-sections>
			</div>
			<div class="col-md-9">
				<div v-if="activedSection === undefined">
					<b-alert variant="warning" show>
						Please choose the section listed on the left to assign its permission!
					</b-alert>
				</div>
				<div v-else-if="activedSection === 'basic'">
					<basic-assignment :basic="odocument.basic" v-if="odocument"></basic-assignment>
				</div>
				<div v-else>
					<section-assignment :section="odocument.sections[activedSection]" :name="activedSection" v-if="odocument.sections"></section-assignment>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DocumentBasic from '@/components/document-basic'
import DocumentSections from '@/components/document-sections'
import SectionAssignment from '@/components/section-assignment'
import BasicAssignment from '@/components/basic-assignment'

export default {
  name: 'PermissionDocument',
  props: ['groups', 'odocument', 'saveDocument'],
  data () {
    return {
			activedSection: undefined,
			deletingName: undefined
		}
	},
	methods: {
		addSection: function () {
			const tpl = {
				basic: [],
				properties: {}
			}
			if (this.odocument && typeof this.odocument.sections === 'object') {
				const keys = Object.keys(this.odocument.sections)
				this.$set(this.odocument.sections, 'new' + keys.length, tpl)
			}
		},
		deleteSection: function (name, event) {
			console.log(this.odocument)
			if (name) {
				if (confirm('Do you want to delete "' + name + '" and its permission assignment?')) {
					this.$set(this.odocument.sections, name, undefined)
					delete this.odocument.sections[name]
					delete this.$store.state.options.opportunity[name]
					console.log(this.odocument)
				}
			} else {
				alert('delete nothing.')
			}
		}
	},
  components: {
    DocumentBasic,
    DocumentSections,
		SectionAssignment,
		BasicAssignment
  }
}
</script>
<style>
	.left-menu ul>li>a:focus {
		background: lightgray;
	}
	.left-menu ul>li>a:hover {
		background: darkgray;
	}
</style>
