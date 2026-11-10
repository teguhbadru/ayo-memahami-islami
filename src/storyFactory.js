/**
 * Additional Ruang Cendekia stories. Existing 15 source stories remain untouched.
 * Each record includes story text, four intentionally tiered oral questions,
 * a practical family discussion example and one kindness challenge.
 */
export function buildLevel(level, category, entries) {
  return entries.map((entry, i) => {
    const [title, text, lifeValue, lifeValueDesc, pairs, example, followUp, task, vocabulary] = entry;
    if (!title || !text || !lifeValue || !lifeValueDesc || !example || !followUp || !task || !Array.isArray(pairs) || pairs.length !== 4) {
      throw new Error("Missing story material in level " + level + " at index " + i);
    }
    return {
      id: level + "." + (i + 4),
      title, category, text, lifeValue, lifeValueDesc,
      reflect: "Bagaimana kamu bisa mempraktikkan nilai " + lifeValue.toLowerCase() + " di rumah atau sekolah?",
      pearl: "Hikmah: " + lifeValueDesc,
      questions: pairs.map(([q, answer]) => ({ q, type: "essay", answer })),
      newWords: vocabulary ? [{term:vocabulary[0], def:vocabulary[1]}] : [],
      parentExample: example,
      parentFollowUp: followUp,
      kindnessTask: task,
      parentTip: "Bacakan pertanyaan perlahan, dengarkan jawaban anak, lalu hubungkan dengan situasi dalam keluarga tanpa menghakimi.",
    };
  });
}
