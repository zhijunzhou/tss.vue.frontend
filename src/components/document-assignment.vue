<template>
	<div class="row">
		<div class="col-md-3 left-menu">
			<div class="form-group text-left mb-2">
				<b-btn variant="outline-success" @click="addSection">Add Section</b-btn>
			</div>
			<document-basic :odocument="odocument" :acsctn.sync="activedSection"></document-basic>
			<document-sections :odocument="odocument" :acsctn.sync="activedSection"></document-sections>
		</div>
		<div class="col-md-9">
			<div v-if="activedSection === undefined">
				<b-alert variant="danger" show>
					Please choose the section listed on left to assign its permission!
				</b-alert>
			</div>
			<div v-else-if="activedSection === 'basic'">
				<basic-assignment :basic="odocument.basic"></basic-assignment>
			</div>
			<div v-else>
				<section-assignment :section="odocument.sections[activedSection]" :name="activedSection"></section-assignment>
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
  props: ['groups', 'odocument'],
  data () {
    return {
			activedSection: undefined
		}
	},
	methods: {
		addSection: function () {
			const tpl = {
				basic: [],
				properties: {}
			}
			if (typeof this.odocument.sections === 'object') {
				const keys = Object.keys(this.odocument.sections)
				this.$set(this.odocument.sections, 'new' + keys.length, tpl)
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
